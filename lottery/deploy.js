const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
  'list approve surge exhaust expose transfer list dragon multiply width carpet crash',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/cea2d39776094df9b2ec98c35edc640d',
  // remember to change this to your own endpoint!
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] })
  console.log(interface)
  console.log('Contract deployed to', result.options.address)
  provider.engine.stop()
}
deploy()
