# NFT Store
It is a decentralized application for creating and selling ERC721 tokens using ERC20 tokens. 

## Prerequisites for the initial launch.
- Node.js
- Hardhat
- Metamask

## Installation.
### 1. Download the repository
### 2. Install the dependencies:
```
$ cd nft_marketplace
$ npm install
```
### 3. Start the local blockchain network:
```
$ npx hardhat node
```
### 4. Connect your metamask wallet to the network:
- Copy the private address key and import it into metamask
- Connect your metamask to the network hardhat: "127.0.0.1:8545", chainID: "31337".
### 5. Run the "deploy.js" file to deploy all smart contracts:
```
$ npx hardhat run src/backend/scripts/deploy.js --network localhost
```
### 6. Run the project:
```
$ npm run start
```

## Usage
1. On the Create page we can create an NFT and put it up for sale. To do this we need to 1. Upload a picture in any format. 2. Enter data about title, description and price. 3. Click on the button "create". Next you need to confirm all requests from metamask.

2. Next, on the Home page we should see all NFTs available for sale. There we can buy one of them by clicking on the button "buy". 

3. On page MylistedItems we can see all our NFTs (sold and not yet)

4. On the page MyPurchases all NFTs you bought will be there.

## Examples
#Creating

![image](https://user-images.githubusercontent.com/80254372/202808243-f6b86018-eaa3-4946-902e-88a8d1cfeff8.png)


