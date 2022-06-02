def caesar_cipher(string, shift_amount):
    result = []
    for i in range(len(string)):
        code = ord(string[i])
        cipher_code = ord(string[i]) + shift_amount
        is_char = string[i].isalpha()
        if string[i].upper() == string[i] and is_char:
            if cipher_code > 90:
                cipher_code = (cipher_code - 26)
            elif cipher_code < 65:
                cipher_code = (cipher_code + 26)
            result.append(chr(cipher_code))
        elif string[i].lower() == string[i] and is_char:
            if cipher_code > 122:
                cipher_code = (cipher_code - 26)
            elif cipher_code < 97:
                cipher_code = (cipher_code + 26)
            result.append(chr(cipher_code))
        else:
            result.append(string[i])
            
    return "".join(result)