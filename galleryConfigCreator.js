const fs = require('fs')
const path = require('path')

const galleries = [
  {
    id: '1',
    title: 'antresole',
  },{
    id: '2',
    title: 'bawialnie',
  },{
    id: '3',
    title: 'stolarka',
  },
  {
    id: '4',
    title: 'cnc',
  },
]

const res = galleries.map((gallery) => {
  const galleryPath = path.join(process.cwd(), 'public', gallery.title)
  const photoSizes = ['300', '1600'] // Different width sizes
  const photos = {}

  // Iterate over each size folder
  photoSizes.forEach((size) => {
    const sizePath = path.join(galleryPath, size)
    const sizePhotos = fs.readdirSync(sizePath)
    photos[size] = sizePhotos
  })

  return {
    id: gallery.id,
    title: gallery.title,
    photos: photos,
  }
})

fs.writeFileSync('galleryConfig.json', JSON.stringify(res, null, 2))
