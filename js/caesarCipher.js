exports.caesarCipher = function(str, num) {
    let result = []
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        let cipherCode = str.charCodeAt(i) + num
        let isChar = (/[a-zA-Z]/).test(str[i])
        if (str[i].toUpperCase() === str[i] && isChar) {
            if(cipherCode > 90){
                cipherCode = (cipherCode - 26)
            } else if(cipherCode < 65){
                cipherCode = (cipherCode + 26)
            }
            result.push(String.fromCharCode(cipherCode))
        } else if (str[i].toLowerCase() === str[i] && isChar){
            if(cipherCode > 122){
                cipherCode = (cipherCode - 26)
            } else if(cipherCode < 97){
                cipherCode = (cipherCode + 26)
            }
            result.push(String.fromCharCode(cipherCode))
        } else {
            result.push(str[i])
        }
    }
    
    return result.join("")
}

