const https = require('https')

module.exports = {
  get: (myName, req, res) => {
    try {
      https.get(`https://teamtreehouse.com/${myName}.json`, response => {
        response.setEncoding('utf8')
        let body = ''
        response.on('data', chunk => {
          body += chunk
        })
        response.on('end', () => {
          if (response.statusCode === 200) {
            try {
              const profile = JSON.parse(body)
              const points = profile.points
              const badges = profile.badges
              let imageSrc = 'https://achievement-images.teamtreehouse.com/treehouse.png'
              if (profile.gravatar_url) {
                imageSrc = profile.gravatar_url
              }
              for (const key in points) {
                if (points[key] === 0) {
                  delete points[key]
                }
              }
              res.render('data', { points, myName, imageSrc, badges })
            } catch (error) {
              console.error(error)
            }
          } else {
            res.render('error', { response })
          }
        })
      })
    } catch (error) {
      console.error(error)
    }
  },
}
