import React from "react";

export default function SearchForm({setSearchTerm}) {
 
  const serachValue=React.useRef('');

  React.useEffect(()=>{
    serachValue.current.focus();
  },[]);
  const handleSubmit=(e)=>{
         e.preventDefault();
  }
  const searchCocktail=()=>{
        setSearchTerm(serachValue.current.value);
  }

  return(
    <section className='section'>
      <h2 className='section-title'>search cocktails</h2>
      <form className='form serach-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input type='text' name='name' id='name'
           onChange={searchCocktail}  ref={serachValue}/>
        </div>
      </form>
    </section>
  );
}
