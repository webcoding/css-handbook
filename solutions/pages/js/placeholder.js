/*! http://www.tcreator.info/cnbootstrap/cndocs/solutions/placeholder.html/placeholder v1.0 by @sofish */
// placeholder ������չ ԭ��JS��չ����
window.onload = function(){
    var doc = document,
    inputs = doc.getElementsByTagName('input'),
	
    // ��� placeholder ֧��
    supportPlaceholder = 'placeholder' in doc.createElement('input'),
    supportPlaceholdertextarea = 'placeholder' in doc.createElement('textarea'),
	
/* 
 * ���� placeholder
 * @param {ELEMENT} input ����� input ����
 * @return {VOID}
 * @author: sofish Lin http://sofish.de
 */
    placeholder = function(input){
        var text = input.getAttribute('placeholder'),
            defaultValue = input.defaultValue;
        if(input.value=="" || input.value==text){
            // ����һ���� placeholder
            // ��Ҫ css ��ϣ��� JS ������ style ����̫��
            input.value=text;
            // input.style.color = 'gray';
            input.className = 'placeholder';
        }
        
        // �۽�ȥ���� placeholder
        input.onfocus = function(){
            if(input.value === text){
                this.value = '';
                // this.style.color = '';
                input.className = '';
            }
        }
        
        // ��ʧ��ֵΪ��ʱ������ placeholder ��ֵ
        input.onblur = function(){
            if(input.value === ''){
                // input.style.color = 'gray';
                input.className = 'placeholder';
                this.value = text;
            }
        }
        input.onkeydown = function(){
            this.style.color = '';
        }
    };
	
    if(!supportPlaceholder){
    	for(var i = 0, len = inputs.length; i < len; i++){
    	    var input = inputs[i], text = input.getAttribute('placeholder');
    	    
    	    // �� input[type=text] ���� placeholder ֵ��Ϊ����ִ��
    	    if(input.type === 'text' && text){
    	    	placeholder(input);
    	    }
    	}    
    }
};
