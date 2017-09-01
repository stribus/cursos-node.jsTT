module.exports = function () {
    return {
        getFile: function (url) {
            return `${__dirname}\\${url}.html`;
        }
    }
}