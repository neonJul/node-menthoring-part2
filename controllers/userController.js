const users = [
    {
        username: 'somebody0',
        password: 'somebodyPassword0'
    },
    {
        username: 'somebody1',
        password: 'somebodyPassword1'
    },
];

module.exports.getUsers = (req, res) => {
    res.send(users)
};