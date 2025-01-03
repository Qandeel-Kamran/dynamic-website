"use client"
import { SetStateAction, useState } from "react";
import style from '@/app/page.module.css'



export default function Header() {

    const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setLanguage(event.target.value);
  };
    
    return(
        <>
       <div  className= { style.saleBanner} >
       <span  className={style.saleText} >
        Summer Sale For All Suits And Free Express Delivery - OFF 50%! 
        <button><u>ShopNow</u></button>

       </span>
       <div className={style.languageSelector}>
        <select value={language} onChange={handleLanguageChange}>
          <option value="EN">English</option>
          <option value="ES">Urdu</option>
          <option value="FR">Français</option>
          {/* Add more language options as needed */}
        </select>
      </div>
       </div>
        </>
    )
}




