import Cards from '../components/cards'
import CardGrid from '../components/cardgrid'
import '../components/cards.css'
import { useContract, useNFTs,useMetadata } from '@thirdweb-dev/react'

const Mint = () => {
  const tokenId = 0
  const { contract } = useContract('0x2eAeEdF566080bc5be953C52aBdA2e54ECAC3A27',"edition-drop");
  console.log(contract);
  const {data: nft, isLoading,error} = useNFTs(contract);
  console.log(nft);
  return (
    <div>
      <div className='para-font'>
        <h1>Mint Truly Free ( NO GAS ) NFT from our Latest Collection <br/> ------------------------ </h1>
        <p>Import your NFT using contract address "0x2eAeEdF566080bc5be953C52aBdA2e54ECAC3A27" and corresponding Token ID</p>
      </div>
      {!isLoading && <CardGrid>
        {
          <>
            <Cards image={nft[0]?.metadata.image} id={nft[0]?.metadata.id} name={nft[0]?.metadata.name} ></Cards>
            <Cards image={nft[1]?.metadata.image} id={nft[1]?.metadata.id} name={nft[1]?.metadata.name} ></Cards>
            <Cards image={nft[2]?.metadata.image} id={nft[2]?.metadata.id} name={nft[2]?.metadata.name} ></Cards>
            <Cards image={nft[3]?.metadata.image} id={nft[3]?.metadata.id} name={nft[3]?.metadata.name} ></Cards>
            <Cards image={nft[4]?.metadata.image} id={nft[4]?.metadata.id} name={nft[4]?.metadata.name} ></Cards>
            <Cards image={nft[5]?.metadata.image} id={nft[5]?.metadata.id} name={nft[5]?.metadata.name} ></Cards>
          </>
        }
      </CardGrid>}
    </div>
    )
  }
  
  export default Mint;
  
