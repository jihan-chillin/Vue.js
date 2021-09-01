module.exports = {
    chainWebpack : config =>{
        config.plugins.delete('prefetch'); // prefetch기능 삭제
    }
}