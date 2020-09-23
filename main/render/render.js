import temp from '../components/templates';
import store from '../manipulate-store/store';
import $ from 'jquery';

function renderInitialScreen() {
    $('header').html(temp.initialControls());
    $('main').html(temp.minimizedBookmarks());
}

function renderNewAddScreen() {
    $('header').empty();
    $('main').html(temp.addNewBookmark());
}

function render() {
    if (store.store.adding === false) {
        renderInitialScreen()
    }
    if (store.store.adding === true) {
        renderNewAddScreen();
    }
}

export default render;