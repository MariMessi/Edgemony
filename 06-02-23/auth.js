const authorize = (req, res, next) => {
    const{user} = req.query 

    if (user ==='Marilena') {
        req.user = {name: 'Marilena'}
        next()}
        else {
            console.log(user)
            res.status(401).send('Ci discpiace ${user} non sei autorizzato')
        }
}

module.exports = authorize