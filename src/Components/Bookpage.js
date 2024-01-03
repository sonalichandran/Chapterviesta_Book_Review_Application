import '../Assets/Css/Bookpage.css'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Import lucide icons
import {Link} from 'react-router-dom'

function Bookpage()
{
    return(
        <>
        <div className="scroll-wrapper">

  <h1 className="journal1">Novel</h1>
       <div class="mainb">
  <ul class="cardsb">
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOI41LfPrvk3Bl7i6zUn8MAiA6DDzVd_5oyqKc6GjdA&s" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Soul</h2>
          <p class="card_textb">It kept my interest and is a page turner. I love the characters she had in this book and it makes me want to go to Cherokee, NC to meet these people. </p>
          
        </div>
      </div>
    </li>
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://marketplace.canva.com/EAFWZynj3fk/1/0/1003w/canva-yellow-fantasy-novel-book-cover-XL6F20t4VFI.jpg" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Sword</h2>
          <p class="card_textb">There are three different shelves you can put a book under:
Want to read, Read, and Currently Reading.A classic novel that addresses racial injustice.</p>
       
        </div>
      </div>
    </li>
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AhYLYJ23koFtBt2RwpzUoxWIR3aMIjiKuLsJeITUSKxj58-Ib1Fn0VfcPae0W-eiNVo&usqp=CAU" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Past of Lifes</h2>
          <p class="card_textb"> I feel like you should have multiple reading dates on your book info so it isn’t just showing the last time you read it.</p>
         
        </div>
      </div>
    </li>
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV-BYehr8yh1NPQWFeOLHnS2fZGdCKGiNFGZ-fwgf5spUUS6-XI_Xa7IGRh6ZYFRKtl4&usqp=CAU" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Last of Sea</h2>
          <p class="card_textb"> You will not be disappointed in this book, it is worth every penny!An engaging and thought-provoking exploration of the history of the human. </p>
         
        </div>
      </div>
    </li>
    
  </ul>
</div>
  <h1 className="journal2">Story</h1>
<div class="mainb1">
  <ul class="cardsb">
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXLQYvMw3V5dPtCCLIsuWuaatF7b1bkOqqg&usqp=CAU" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">The Spirit</h2>
          <p class="card_textb"> The story is set in a future where time travel is a reality, and it follows the journey of Dr. Emily Thornton, a brilliant physicist, as she unravels the mysteries.</p>
          
        </div>
      </div>
    </li>
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqKhRUEZCEDCHDnb_IitbgddMInZ1gacmpw&usqp=CAU" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Waiting for You</h2>
          <p class="card_textb">A magical and atmospheric tale of two illusionists engaged in a mysterious competition within a magical circus that appears only at night.</p>
       
        </div>
      </div>
    </li>
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLKhLs1YaCHKNYfhDdAz_hS3ixD_nsTxSAw&usqp=CAU" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Everything you never had</h2>
          <p class="card_textb">A psychological thriller that follows the intertwining lives of three women,
          A mystery novel and coming-of-age story set in the marshes of North Carolina </p>
         
        </div>
      </div>
    </li>
    <li class="cards_itemb">
      <div class="cardb">
        <div class="card_imageb"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6WG-xbDBmZBv9Uo11rNd3mcAO6ZZVeBBwg&usqp=CAU" className="bpimg"/></div>
        <div class="card_contentb">
          <h2 class="card_titleb">Dark Side of Winter</h2>
          <p class="card_textb">A philosophical and inspirational novel that follows the journey of Santiago.Set in the Roaring Twenties, this classic novel explores themes of wealth, love,</p>
         
        </div>
      </div>
    </li>
    
  </ul>
</div>

<div className="footer-col">

                <h4 className="foothead">follow us</h4>
                <div class="social-links">
                
                  <Link to="/">
                    <Facebook size={35} color="white" className="ficon"/>
                  </Link>
                  <Link to="/">
                    <Twitter size={35} color="white" className="ficon"/>
                  </Link>
                  <Link to="/">
                    <Instagram size={35} color="white" className="ficon"/>
                  </Link>
                  <Link to="/">
                    <Linkedin size={35} color="white" className="ficon"/>
                  </Link>
                </div>
                <div className="contentall">
                    <li>Terms&Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Visit Site</li>
                    <li>Available Books</li>
                </div>
                <div className="contentall1">
                    <li>Contact us</li>
                    <li>www.bookChatViesta@gmail.com</li>
                    <li>Head-xxx</li>
                    <li>Further Information</li>
                </div>
                <div className="contentall2">
                    <li>Know more</li>
                    <li>Sponsors</li>
                    <li>Dealers</li>
                    <li>Inclusion</li>
                </div>
             
              </div>
           
        

</div>

      
        </>
    )
}
export default Bookpage;