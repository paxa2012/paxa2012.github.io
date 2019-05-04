import React from 'react';



let State;

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            coment:[]
        }
        
        if (localStorage.getItem('comentt') === null) {
			State = [];
		} else {
			let ls = localStorage.getItem('comentt');
			ls = JSON.parse(ls);
			let arr = [];
			State = ls.map((e) => {
				
				arr.push(e)
				
			});
			State = arr;
		}

		this.state = {
			coment: State,
			
		}

	
        
    }
    addcoment(){
        const date1 = new Date();
        let date = `${date1.getDate()}.${date1.getMonth()}.${date1.getFullYear()} ${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const text = document.querySelector('textarea');
        let email_val = email.value;
        let text_val = text.value;
        let name_val = name.value;
         const coment = this.state.coment;
         if(text_val == ''){
             alert('Введите значение полей!');
         }
         else{
            coment.push({
                author: name_val,
                email: email_val,
                date: date,
                coment: text_val,
             });
         }
         this.setState({coment})
        localStorage.setItem("comentt", JSON.stringify(coment));
        email.value = '';
        text.value = '';
        name.value= '';
    }
    removeComment(index) {
        let coment = this.state.coment;
        coment.splice(index, 1);
        this.setState({coment})
        localStorage.setItem("comentt", JSON.stringify(coment));
      }
    render(){

        
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='name'>
                                <input  type='text' id='name' name='author' placeholder='Ваше имя' />
                                <input  type='text' id='email' name='email' placeholder='Ваш Email'/><br/>
                                <textarea  name="coment" cols="48" rows="10"></textarea>
                                
                            </div>
                            <button type='submit' onClick={() =>{this.addcoment()}}
                                    >
                                     Добавить коментарий
                                </button>
                        </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='comentt'>
                                    {  this.state.coment.map((add,i) =>{
                                  return(
                                    <div key={i} className='masse'>
                                    <div className="row">
                                        <div className="col">
                                            <div className='author'>{`Автор: ${add.author}`}</div>
                                        </div>
                                        <div className='col'>
                                            <div className='email'>{`Email: ${add.email}`}</div>
                                        </div>
                                        <div className="col">
                                            <div className='data'>{`Дата ркгистрации: ${add.date}`}</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"> 
                                            <div className='coments'>{`Коментарий: ${add.coment}`}</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button 
                                            onClick={e =>{
                                                {this.removeComment(i)}
                                                  
                                            }
                        
                                            }>Удалить коментарий</button>
                                        </div>
                                    </div>
                                </div>
                                  );
                                })
                                }
                                </div>
                        </div>
                    </div>
                </div>
                );

           
        
    }

}
export default App;

