import obj from '../manipulate-store/store';
import $ from 'jquery';

function initialControls() {
    const temp = `
    <button class="new-button">+ New</button>
    <select name="rating" class="js-bookmark-rating" aria-label="rating-dropdown">
        <option value="1">1 star</option>
        <option value="2">2 star</option>
        <option value="3">3 star</option>
        <option value="4">4 star</option>
        <option value="5">5 star</option>
    </select>
    `;
    return temp;
}

function minimizedBookmarks() {
    let temp = '';
    let counter = obj.store.bookmarks.length;
    for (let i = 0; i < counter; i++) {
        temp += `
        <button type="button" class="collapsible">
        ${obj.store.bookmarks[i].title}${obj.store.bookmarks[i].rating}
        </button>
        <div class="content">
            <p>${obj.store.bookmarks[i].desc}</p>
            <a href="${obj.store.bookmarks[i].url}">Visit website</a>
        </div>`;
    }
    return temp;
}

function addNewBookmark() {
    const temp = `
    <div>
        <form class="new-form">
            <label>Add new title: </label><input type="text" class="new-title"/>
            <label>Add url: </label><input type="text" class="new-url"/>
            <label>Add rating: </label><input type="number" min="0" class="new-rating"/>
            <label>Add description: </label><input type="text" class="new-description"/>
            <input type="submit" class="submit-new" placeholder="Submit"/>
        </form>
    </div>
    `;
    return temp;
}


export default {
    initialControls,
    minimizedBookmarks,
    addNewBookmark,
}