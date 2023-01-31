function authUser(email, password) {

    console.log(email, password);
    if(email === 'callumbuttery@gmail.com' && password === 'callum123') return true;
    
    return false;
}

module.exports = (req, res) => {

    try {
        const { email, password } = req.body.data;

        const authed = authUser(email, password);

        console.log('authed: ', authed);

        if(authed) { return res.sendStatus(200) };

        throw new Error('Failed to authentic user');
        

    } catch (e) {
        console.error(e);
        return res.sendStatus(422)
    }

}