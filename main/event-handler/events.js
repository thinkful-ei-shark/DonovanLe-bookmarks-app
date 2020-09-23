import $ from 'jquery';
import render from '../render/render';
import api from '../services/api';
import store from '../manipulate-store/store';

function handleNewButton() {
    $('body').on('click', '.new-button', function () {
        console.log('NEW BUTTON CLICKED');
        render.renderNewAddScreen();
    })
}

function handleSubmitButton() {
    $('body').on('submit', '.new-form', function (x) {
        x.preventDefault();
        console.log('SUBMIT BUTTON CLICKED');
        const values = {};
        values.title = $('.new-title').val();
        values.url = $('.new-url').val();
        values.description = $('.new-description').val();
        values.rating = $('.new-rating').val();
        api.addBookmarks(values)
            .then((newBookmark) => {
                store.addBookmark(newBookmark);
                render.renderInitialScreen();
            })
            .catch((e) => {
                store.setError(e.message);
            })
    })
}

export default {
    handleNewButton,
    handleSubmitButton
}