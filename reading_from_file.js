//код чтения файла копирнул из интернета

var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
    string_of_digits = reader.result;
    var arr = string_of_digits.split('');
    var string_for_JSON = "[";
    for(var i = 0; i <= arr.length - 2; i++)
        string_for_JSON = string_for_JSON + arr[i] + ", ";
    string_for_JSON = string_for_JSON + arr[arr.length - 1] + "]";
    var JSON_object = JSON.parse(string_for_JSON);
    (function() {
        var processing = {
            find_element:function(callback){
                callback.call(this, 3);
            },
            paste_element:function(callback){
                callback.call(this, 50);
            },
            delete_element:function(callback){
                callback.call(this);
            },
            sorting:function(callback){
                callback.call(this);
            },
            print:function(callback){
                callback.call(this);
            }
        };
        
    processing.find_element(function(value) {
        for (var i=0; i<=JSON_object.length-1; i++) { 
            if(JSON_object[i] == value)
                alert(JSON_object[i]);
    }});
    processing.paste_element(function(value){
      JSON_object.push(value);  
      alert(JSON_object);
    });
    processing.delete_element(function(value){
      JSON_object.pop();  
      alert(JSON_object);
    });
    processing.sorting(function(){
        for (i=0; i<=JSON_object.length - 2;i++) {
            var min=JSON_object[i];
            for (j=i+1; j<=JSON_object.length - 1; j++) {
                if (JSON_object[j] < min);
                    bufer=JSON_object[i];
                    min=JSON_object[j];
                    JSON_object[i]=min;
                    JSON_object[j]=bufer;
                    }
            }
        alert(JSON_object);
    });
    processing.print(function(){
        alert(JSON_object);  
    });
    }());
    };
    reader.readAsText(input.files[0]);
};