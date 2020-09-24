import obj from '../manipulate-store/store';
import $ from 'jquery';




function initialControls() {
    const temp = `
    <div class="control-section">
        <button class="new-button style-controls">+ New</button>
        <select name="rating" class="js-bookmark-rating style-controls" aria-label="rating-dropdown" placeholder="Filter">
            <option value="" disabled selected hidden>Filter by</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
        </select>
    </div>
    

    `;
    return temp;
}

function minimizedBookmarks() {
    let temp = ''; //variable to hold page template
    let counter = obj.store.bookmarks.length; //counter for how long your bookmark object is
    for (let i = 0; i < counter; i++) { //loop through bookmark object in order to get every object inside
        temp += `   
        <div class="item-content" data-item-id=${obj.store.bookmarks[i].id}> 
        <button type="button" class="collapsible">
        <span style="font-size:15px;">${obj.store.bookmarks[i].title}</span><span style="margin-left: 20px;">${convertRating(obj.store.bookmarks[i].rating)}</span>
        </button>
            <div class="content">
                <p>${obj.store.bookmarks[i].desc} </p>
                <a href="${obj.store.bookmarks[i].url}" target="_blank" rel="noopener" class="website-link">Visit website</a>
                <div class="edit-delete">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            </div>
            <hr>
        </div>`; //template is made to continuosly add more bookmarks as user adds more
    }
    return temp; //return the template to the render function in order to be rendered
}

function convertRating(rating) {
    let page = '';
    for (let i = 0; i < rating; i++) {
        page += '<i class="fas fa-star" style="margin-right:5px;"></i>'
    }
    console.log(page);
    return page;
}

function addNewBookmark() {
    const temp = `
    <div>
        <form class="new-form">
            <div class="style-form-input">
            <label>Add new title: </label><input type="text" class="new-title" placeholder="Nickname bookmark" required/>
            </div>
            <div class="style-form-input">
            <label>Add url: </label><input type="text" class="new-url" placeholder="'https://something.com'" required/>
            </div>
            <div class="style-form-input">
            <label>Add rating: </label><input type="number" min="0" max="5" class="new-rating" placeholder="1-5 stars" required/>
            </div>
            <div class="style-form-input">
            <label>Add description: </label><textarea class="new-description" required></textarea>
            </div>
            <div class="submit-button">
            <input type="submit" class="submit-new" placeholder="Submit"/>
            </div>
            
        </form>
    </div>
    `;
    return temp;
}


export default {
    initialControls,
    minimizedBookmarks,
    addNewBookmark,
    convertRating
}