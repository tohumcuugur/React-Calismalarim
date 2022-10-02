import React from 'react';
import {Link ,useNavigate} from "react-router-dom";


function Menu() {
    const navigate = useNavigate();

  return (
    <div>
        <ul className='menu'>
            <li onClick={()=> navigate(-1)}> 
                Geri
            </li>
            <li > 
                <a href='#/' onClick={()=> navigate(-1)}>Geri</a>
            </li>
            <li>
                <a href="/">Anasayfa(Test)</a>
            </li>
            <li>
            <Link to="/">Anasayfa</Link>
            </li>
            <li>
            <Link to="Users">Kullanıcılar</Link>
            </li>
            <li>
            <Link to="Contact">İletişim</Link>
            </li>
            <li onClick={()=> navigate('Contact')}>
                İletişim
            </li>
          
        </ul>
    </div>
  )
}

/* <li>
        <a href="/">Anasayfa(Test)</a>
    </li>  
    <a> etiketiyle tanımlanmış linke tıkladığımızda görürüz ki sayfa yenilenerek anasayfaya geçiş yapar fakat react-routerin sağlamış olduğu <Link /> özelliği
bize sadece istediğimiz kısımları güncellenmesini ve bulunduğumuz sayfayı yenilemeden yapmayı sağlar */

export default Menu;
// const navigate = useNavigate(); useNavigate kullanarakta bağlantı sağlayabiliriz fakat link şeklinde vermez ve ekstra olarak css özelliklerinden cursor pointer vermemiz gerekir. Fakat kullanışlı olan bir yanıda   <li onClick={()=> navigate(-1)}> Geri</li> """""onClick={()=> navigate(-1)}""""" şeklinde bir tanımlama ile linke tıkladığımızda bir önceki sayfaya dönmesini sağlayabiliriz.