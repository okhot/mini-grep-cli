function search (dirname, keyword){
    fs.read(dirname, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data.toString)
        }
    })
}

exports.module = search