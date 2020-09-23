import $ from 'jquery';
import render from '../render/render';
import api from '../services/api';
import store from '../manipulate-store/store';

function handleNewButton() {
    $('header').on('click', '.new-button', function () {
        console.log('NEW BUTTON CLICKED');
        store.store.adding = true;
        render();
    })
}

function handleSubmitButton() {
    $('main').on('submit', '.new-form', function (x) {
        x.preventDefault();
        console.log('SUBMIT BUTTON CLICKED');
        store.store.adding = false;
        const values = {};
        values.title = $('.new-title').val();
        values.url = $('.new-url').val();
        values.desc = $('.new-description').val();
        console.log(values.desc);
        values.rating = $('.new-rating').val();
        console.log(values);
        api.addBookmarks(values)
            .then((newBookmark) => {
                store.addBookmark(newBookmark);
                render();
            })
            .catch((e) => {
                store.setError(e.message);
            })
    })
}

function eventBinder() {
    handleNewButton();
    handleSubmitButton();
}
export default {
    handleNewButton,
    handleSubmitButton,
    eventBinder
}