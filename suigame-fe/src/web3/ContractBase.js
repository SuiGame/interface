import { getWeb3Instance, getAccount } from './wallet-eth'

export default class ContractBase {
  _web3
  _contract
  _address

  constructor(contractAddress, abi) {
    this._web3 = getWeb3Instance()
    this._contract = new this._web3.eth.Contract(abi, contractAddress)
    this._address = getAccount()
  }

  /**
   * 发送合约交易
   * @param {String} method 合约方法名
   * @param {Array} args 合约方法的参数，以数组的形式传入
   */
  async sendTransaction(method = '', args = [], options) {
    if (!this._web3) throw new Error('web3 instance is undefined')
    if (!method) throw new Error('method is required')

    options = options || {}

    const gasPrice = await this._web3.eth.getGasPrice()
    const gas = await this._contract.methods[method](...args).estimateGas({
      from: this._address,
      ...options,
    })
    console.log(`${method} estimateGas`, gas)

    return new Promise((resolve, reject) => {
      this._contract.methods[method](...args)
        .send({
          from: this._address,
          gasPrice,
          gas: parseInt(gas * 1.2),
          ...options,
        })
        // .on('transactionHash', (hash) => {
        //   console.log(`${method} onTransactionHash`, hash)
        // })
        .on('receipt', (receipt) => {
          console.log(`${method} onReceipt`, receipt)
          if (receipt['status']) {
            resolve(receipt)
          }
        })
        // .on('confirmation', (confirmationNumber, receipt) => {
        //   console.log(`${method} onConfirmation`, confirmationNumber, receipt)
        // })
        .on('error', (error, receipt) => {
          console.log(`${method} onError`, error, receipt)
          reject(error)
        })
    })
  }
}
