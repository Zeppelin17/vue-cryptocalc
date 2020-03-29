/**
 * In this config file there are some constants that can be changed
 * to make the project work as desired.
 * 
 * The main API endpoint should be stablished and previously configured..
 * Only change API tickers endpoint if there are updated in the backend app.
 *
 * @summary config file for constants
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:35:26 
 * Last modified  : 2020-03-29 07:53:30
 */

//timeout for API calls
export const API_TIMEOUT = 15000
//check exchanges data every some seconds
export const EXH_INTERVAL_TIMEOUT = 25000
//compare exchanges data every some secons
export const CALC_INTERVAL_CHECK = 5000

//backend API endpoint
export const API_ENDPOINT = "https://zeppelin17.pythonanywhere.com"
//exchanges endpoints
export const BINANCE_TICKER = API_ENDPOINT + "/binance/ticker/"
export const BITFINEX_TICKER = API_ENDPOINT + "/bitfinex/ticker/"
export const HITBTC_TICKER = API_ENDPOINT + "/hitbtc/ticker/"
export const KRAKEN_TICKER = API_ENDPOINT + "/kraken/ticker/"
export const OKEX_TICKER = API_ENDPOINT + "/okex/ticker/"