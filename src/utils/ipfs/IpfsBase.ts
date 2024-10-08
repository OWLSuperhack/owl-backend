export function ProvideBase(
  id: string,
  index: number,
  location: string,
  address: string,
  data: string
) {
  const body = {
    description: '',
    externalUrl: 'https://github.com/OWLSuperhack/owl-backend',
    image: '',
    name: 'OWL Progress Badge',
    attributes: [{}],
  }
  switch (index) {
    case 0:
      body.description = 'This is the first level of the OWL Progress Badge'
      body.image = ProvideImage(0)
      body.attributes = [
        {
          display_type: "number", 
          trait_type: 'Level',
          value: '1',
        },
        {
          trait_type: 'Rarity',
          value: 'Common',
        },
        {
          trait_type: 'Location',
          value: location,
        },
        {
          trait_type: 'Address',
          value: address,
        },
        {
          trait_type: 'ID',
          value: id,
        },
        {
          display_type: "boost_percentage",
          trait_type: 'Progress',
          value: index,
        },
        {
          trait_type: 'Data',
          value: data,
        },
      ]
      break
    case 6:
      body.description = 'This is the second level of the OWL Progress Badge'
      body.image = ProvideImage(1)
      body.attributes = [
        {
          display_type: "number", 
          trait_type: 'Level',
          value: '2',
        },
        {
          trait_type: 'Rarity',
          value: 'Rare',
        },
        {
          trait_type: 'Location',
          value: location,
        },
        {
          trait_type: 'Address',
          value: address,
        },
        {
          trait_type: 'ID',
          value: id,
        },
        {
          display_type: "boost_percentage",
          trait_type: 'Progress',
          value: index,
        },
        {
          trait_type: 'Data',
          value: data,
        },
      ]
      break
    case 10:
      body.description = 'This is the third level of the OWL Progress Badge'
      body.image = ProvideImage(2)
      body.attributes = [
        {
          display_type: "number", 
          trait_type: 'Level',
          value: '3',
        },
        {
          trait_type: 'Rarity',
          value: 'Epic',
        },
        {
          trait_type: 'Location',
          value: location,
        },
        {
          trait_type: 'Address',
          value: address,
        },
        {
          trait_type: 'ID',
          value: id,
        },
        {
          display_type: "boost_percentage",
          trait_type: 'Progress',
          value: index,
        },
        {
          trait_type: 'Data',
          value: data,
        },
      ]
      break
    case 11:
      body.description = 'This is the fourth level of the OWL Progress Badge'
      body.image = ProvideImage(3)
      body.attributes = [
        {
          display_type: "number", 
          trait_type: 'Level',
          value: '4',
        },
        {
          trait_type: 'Rarity',
          value: 'Legendary',
        },
        {
          trait_type: 'Location',
          value: location,
        },
        {
          trait_type: 'Address',
          value: address,
        },
        {
          trait_type: 'ID',
          value: id,
        },
        {
          display_type: "boost_percentage",
          trait_type: 'Progress',
          value: index,
        },
        {
          trait_type: 'Data',
          value: data,
        },
      ]
      break
    default:
      body.description = 'This is the first level of the OWL Progress Badge'
      body.image = ProvideImage(0)
      body.attributes = [
        {
          display_type: "number", 
          trait_type: 'Level',
          value: '1',
        },
        {
          trait_type: 'Rarity',
          value: 'Common',
        },
        {
          trait_type: 'Location',
          value: location,
        },
        {
          trait_type: 'Address',
          value: address,
        },
        {
          trait_type: 'ID',
          value: id,
        },
        {
          display_type: "boost_percentage",
          trait_type: 'Progress',
          value: index,
        },
        {
          trait_type: 'Data',
          value: data,
        },
      ]
      break
  }
  return body
}
function ProvideImage(index: number) {
  switch (index) {
    case 0:
      return 'https://amethyst-total-vicuna-396.mypinata.cloud/ipfs/QmZXeLAXPGbB79GLpdKpS9qYRcsp6hE6BvoGBwiqZGpfu2'
      break
    case 1:
      return 'https://amethyst-total-vicuna-396.mypinata.cloud/ipfs/QmVgj2eMNvjDbccDspwjJYLLoYLNMPN2HPdgqBarqZDhtn'
      break
    case 2:
      return 'https://amethyst-total-vicuna-396.mypinata.cloud/ipfs/QmczVotoscBCNcL4wLng1YbSkMUTW3x4ZGfTKG1bLQco6J'
      break
    case 3:
      return 'https://amethyst-total-vicuna-396.mypinata.cloud/ipfs/QmPTTuYMcwpixkRvFzBJrcQKb4PicuX3uYVqV7jKZY3Gh8'
      break
    default:
      return 'https://amethyst-total-vicuna-396.mypinata.cloud/ipfs/QmZXeLAXPGbB79GLpdKpS9qYRcsp6hE6BvoGBwiqZGpfu2'
      break
  }
}
