document.addEventListener('turbolinks:load',function(){
    document.getElementById('exchange_from').addEventListener('ajax:sucess',function(event){
        let [result] = event.detail
        document.getElementById('result').value = result.value
    })
})