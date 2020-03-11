<template>
    <div class="container">
        <div class="row">
            <h2>Parameters</h2>
            <form class="col-sm-12">
                <div class="form-row">
                    <div class="form-group col-sm-12 col-md-3">
                        <label for="pair">
                            Pair 
                            <font-awesome-icon :icon="['fas', 'info-circle']" id="param-pair-icon"/>
                        </label>
                        <select 
                            name="pair" 
                            id="param-pair" 
                            class="custom-select" 
                            v-model="currentPair"
                        >
                            <option value="btc-usd">BTC-USD</option>
                            <option value="dsh-btc">DSH-BTC</option>
                            <option value="dsh-usd">DSH-USD</option>
                            <option value="eth-btc">ETH-BTC</option>
                            <option value="eth-usd">ETH-USD</option>
                            <option value="ltc-btc">LTC-BTC</option>
                            <option value="ltc-usd">LTC-USD</option>
                        </select>
                    </div>

                    <div class="form-group col-sm-12 col-md-3">
                        <label for="lots">
                            Lots
                            <font-awesome-icon :icon="['fas', 'info-circle']" id="param-lots-icon"/>
                        </label>
                        <input 
                            type="number" 
                            step="0.000001" 
                            name="lots" 
                            id="param-lots" 
                            class="form-control"
                            v-model="currentLots"
                        >
                    </div>

                    <div class="form-group col-sm-12 col-md-3">
                        <label for="minProfit">
                            Minimum profit (%)
                            <font-awesome-icon :icon="['fas', 'info-circle']" id="param-minProfit-icon"/>
                        </label>
                        <input 
                            type="number" 
                            step="0.1" 
                            name="minProfit" 
                            id="param-minProfit" 
                            class="form-control"
                            v-model="currentProfit"
                        >
                    </div>

                    <div class="form-group col-sm-12 col-md-3">
                        <label for="fees">
                            Total fees (%)
                            <font-awesome-icon :icon="['fas', 'info-circle']" id="param-fees-icon"/>
                        </label>
                        <input 
                            type="number" 
                            name="fees" 
                            id="param-fees" 
                            class="form-control"
                            v-model="currentFees"
                        >
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <input 
                            type="button" 
                            :value="addParamButtonText" 
                            id="param-add" 
                            class="btn btn-dark mb-2"
                            @click="addNewParameter()"
                        >
                    </div>
                </div>

                <b-tooltip target="param-pair-icon">
                    Search operations for this pair. You buy/sell the left currency with the right one.
                </b-tooltip>
                <b-tooltip target="param-lots-icon">
                    Amount of the operation. For example, in the pair BTC-USD with a lot of 100, 
                    means that every buy/sell operation done will be for 100 USD.
                </b-tooltip>
                <b-tooltip target="param-minProfit-icon">
                    Benefit or profit you want to achieve in each buy/sell operation. All the operations below that
                    minimum percentage will be discarded.
                </b-tooltip>
                <b-tooltip target="param-fees-icon">
                    Simulation of total fees you will be charged. Every Exchange has it's own fees
                    (for operation, for converting currencies, etc.).
                </b-tooltip>

                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <div v-if="formResultMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
                            {{ formResultMessage }}
                            <button 
                            type="button" 
                            class="close" 
                            aria-label="Close"
                            @click="closeResultMessage()"
                        >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div v-if="parameters.length > 0" class="row">
            <div class="col-sm-12">
                <table class="table table-striped">
                    <thead>
                        <th>Pair</th>
                        <th>Lots</th>
                        <th>Min. profit</th>
                        <th>Total fees</th>
                        <th colspan="2"></th>
                    </thead>
                    <tbody>
                        <tr v-for="param in parameters" :key="param.pair">
                            <td>{{ param.pair }}</td>
                            <td>{{ param.lots }}</td>
                            <td>{{ param.minProfit }}%</td>
                            <td>{{ param.fees }}%</td>
                            <td>
                                <b-button 
                                    variant="outline-dark" 
                                    v-b-tooltip.hover title="Edit"
                                    @click="setEditParam(param.pair, param.lots, param.minProfit, param.fees)"
                                >
                                    <font-awesome-icon :icon="['fas', 'edit']" />
                                </b-button>
                                
                            </td>
                            <td>
                                <b-button 
                                    variant="outline-danger" 
                                    v-b-tooltip.hover title="Delete"
                                    @click="deleteParam(param.pair)"
                                >
                                    <font-awesome-icon :icon="['fas', 'trash-alt']" />
                                </b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <b-modal 
                    id="modal-edit-params" 
                    title="Edit pair parameters"
                    headerBgVariant="dark"
                    headerTextVariant="light"
                    ok-title="Save"
                    ok-variant="success"
                    cancel-variant="light"
                    @ok="editParam"
                >
                    <h4 v-if="editParameter">Pair {{ editParameter.pair | capitalize }}</h4>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-sm-12">
                                <label for="chgLots">Lots</label>
                                <input
                                    v-if="editParameter"  
                                    type="number" 
                                    step="0.000001" 
                                    name="chgLots" 
                                    class="form-control"
                                    v-model="editParameter.lots"
                                >
                            </div>

                            <div class="form-group col-sm-12">
                                <label for="chgProfit">Minimum Profit (%)</label>
                                <input
                                    v-if="editParameter"
                                    type="number"
                                    step="0.1" 
                                    name="chgProfit" 
                                    class="form-control"
                                    v-model="editParameter.minProfit"
                                >
                            </div>

                            <div class="form-group col-sm-12">
                                <label for="chgFees">Total fees (%)</label>
                                <input 
                                    v-if="editParameter"
                                    type="number" 
                                    name="chgFees" 
                                    class="form-control"
                                    v-model="editParameter.fees"
                                >
                            </div>
                        </div>
                    </form>
                </b-modal>
            </div>

            <div class="col-sm-12">
                <button  
                    class="btn btn-success mb-2"
                    @click="searchOperations()"
                >{{ searchButtonText }}</button>
            </div>
            
        </div>

        <div v-if="opportunitiesFound.length > 0" class="row">
            <h2>Search results</h2>
            <div class="col-sm-12" v-if="opportunitiesFound.length > 0">
                <b-pagination
                    pills
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="oppFoundTable"
                >
                </b-pagination>
                <b-table 
                    class="table table-striped"
                    id="oppFoundTable"
                    :items="opportunitiesFound"
                    :per-page="perPage"
                    :current-page="currentPage"
                >
                </b-table>
            </div>
        </div>
        
    </div>
</template>

<script>
import { CALC_INTERVAL_CHECK } from '@/config.js'
export default {
    name: 'CalculatorParameters',
    data() {
        return {
            currentPair: null,
            currentLots: null,
            currentProfit: null,
            currentFees: null,
            parameters: [],
            formResultMessage: null,
            editParameter: null,
            opportunitiesFound: [],
            searchInterval: null,
            perPage: 5,
            currentPage: 1
        }
    },
    computed: {
        addParamButtonText() {
            if (this.parameters.length > 0) {
                return "Add new param"
            }else{
                return "Add param"
            }
        },
        searchButtonText() {
            if (this.searchInterval === null) {
                return "Start searching"
            }else{
                return "Stop"
            }
        },
        opportunities() {
            return  this.$store.state.arbOpportunities.opportunities
        },
        rows() {
            return this.opportunitiesFound.length
        }
    },
    methods: {
        /** 
         * Method to validate a parameter before adding it to the parameters array
         */
         validateParameter(checkPair = true) {
            // cleaning old errors in validation
            this.closeResultMessage()

            if (
                this.currentPair === null
                || this.currentLots === null 
                || this.currentProfit === null
                || this.currentFees === null
            ) {
                this.formResultMessage = "All fields are mandatory, check the form again please."
                return false
            }

            if (
                isNaN(parseInt(this.currentLots)) 
                || isNaN(parseInt(this.currentProfit)) 
                || isNaN(parseInt(this.currentFees)) 
            ) {
                this.formResultMessage = "Lots, profit and fees must be numeric."
                return false
            }
            
            // check repetition of pair only when needed (when editing we shouldn't)
            if (checkPair) {
                let repeated = false
                for (let set of this.parameters) {
                    if (this.currentPair === set.pair) {
                        repeated = true
                        break
                    }
                }
                if (repeated) {
                    this.formResultMessage = "This pair is already added."
                    return false
                }
            }
            

            // everything is ok
            return true
         },
        
        /**
         * Method to add new set of params to parameters array
         */
        addNewParameter(position = null) {
            
            let isValid = this.validateParameter()

            // adding set of params to params array
            if (isValid) {
                let paramsObj = {
                    "pair": this.currentPair,
                    "lots": this.currentLots,
                    "minProfit": this.currentProfit,
                    "fees": this.currentFees
                }
                // insert element in the specified position, if given. Add it at the end if not.
                if (position !== null) {
                    this.parameters.splice(position, 0, paramsObj)
                }else{
                    this.parameters.push(paramsObj)
                }
                
            }
            
        },
        /**
         * Method to dismiss bootstrap alert below form
         */
        closeResultMessage() {
            this.formResultMessage = null
        },
        /**
         * Delete param from list of params
         */
        deleteParam(pairKey) {
            this.parameters = this.parameters.filter(p => p.pair != pairKey)
        },
        /**
         * Set editParameter we are going to edit
         */
        setEditParam(pair, lots, minProfit, fees) {
            this.editParameter = {
                "pair": pair,
                "lots": lots,
                "minProfit": minProfit,
                "fees": fees
            }

            this.$bvModal.show("modal-edit-params")
        },
        /**
         * Method to edit a parameter in the parameters array
         */
        editParam() {
            //bvModalEvt.preventDefault()
            
            this.currentPair = this.editParameter.pair
            this.currentLots = this.editParameter.lots
            this.currentProfit = this.editParameter.minProfit
            this.currentFees = this.editParameter.fees

            let checkPair = false
            let isValid = this.validateParameter(checkPair)

            if (isValid) {
                // find position in the parameters array of the pair we are editing
                let position = this.parameters.findIndex(k => k["pair"] == this.currentPair)
                this.deleteParam(this.currentPair) 
                this.addNewParameter(position)
                
            }

            this.currentPair = null
            this.currentLots = null
            this.currentProfit = null
            this.currentFees = null
            
        },
        /**
         * Method that search for operations acomplishing the parameters indicated
         */
        compOpportunitiesWithParameters() {
            for (let opp of this.opportunities) {
                for (let data of opp.data) {
                    for (let param of this.parameters) {
                        if (param.pair.toUpperCase() === data.pair.toUpperCase()) {

                            let margin = 100 - ((data.askPrice / data.bidPrice) * 100)
                            if (margin < param.minProfit) {
                                continue // skip if no min. profit is met
                            }
                            
                            let profit = ((param.lots / data.askPrice) - (param.lots / data.bidPrice)) * data.askPrice
                            let fees = (param.fees / 100) * profit
                            let realProfit = profit - fees
                            let symbol = data.pair.split("-")[1]

                            let tmpObj = {
                                "buyIn": data.buyIn,
                                "sellIn": data.sellIn,
                                "pair": data.pair,
                                "lots": param.lots,
                                "realProfit": realProfit,
                                "symbol": symbol
                            }

                            this.opportunitiesFound.unshift(tmpObj)
                        }
                    }
                }
             }
        },
        /**
         * Method that sets a time interval to search for opportunities
         */
        searchOperations() {
            if (this.searchInterval === null) {
                this.compOpportunitiesWithParameters()
                this.searchInterval = setInterval(() => {this.compOpportunitiesWithParameters()}, CALC_INTERVAL_CHECK)
            }else {
                clearInterval(this.searchInterval)
                this.searchInterval = null
            }
            
        }
    },
    filters: {
        capitalize: function(val) {
            if(!val) return
            val = val.toString()
            return val.toUpperCase()
        }
    }
}
</script>

<style scoped>
    .row h2 {text-align: center; margin:auto; margin-bottom: 15px}
    table td {vertical-align: middle}
</style>