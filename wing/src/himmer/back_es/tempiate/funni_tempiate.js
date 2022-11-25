

export default {
    text_of_params: (params, text) => {
        text = text + ''
        params ? params.map((e, i) => {
            text = text.replace('{{' + (i + 1) + '}}', e.text)
        }) : undefined; 
        return text
    }
}