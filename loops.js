function vowelsAndConsonants(s) {
    let l = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
            console.log(s[i])
        }else{
            l+=s[i];
        }       
        
    }
    for(let i = 0; i < l.length; i++){
        console.log(l[i])
    }
}


vowelsAndConsonants("javascriptloops");