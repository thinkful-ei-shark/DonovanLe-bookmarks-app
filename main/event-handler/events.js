import $ from 'jquery';
import render from '../render/render';
import api from '../services/api';
import store from '../manipulate-store/store';


function getItemIdFromElement(bookmark) {
    return $(bookmark)
        .closest('.item-content')
        .data('item-id');
}

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

function handleExpand() {
    $('body').on('click', '.collapsible', function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })
}

function handleEdit() {
    $('body').on('click', '.edit-button', function () {
        console.log('EDIT BUTTON');
    })
}

function handleDelete() {
    $('body').on('click', '.delete-button', function (event) {
        console.log('DELETE BUTTON');
        const id = getItemIdFromElement(event.currentTarget);
        api.deleteBookmarks(id)
            .then(() => {
                store.findAndDelete(id);
                render();
            })
            .catch((e) => {
                store.setError(e.message);
            })
    })
}

function handleFilter() {
    $('header').on('click', function () {
        console.log('CHANGE HAPPENING');
        $('.js-bookmark-rating').on('change', function () {
            let value = $(this).val();
            console.log('FILTER CHANGED')
            console.log(value);
            store.store.filter = value;
            render();
        })
    })
}

function eventBinder() {
    handleNewButton();
    handleSubmitButton();
    handleExpand();
    handleEdit();
    handleDelete();
    getItemIdFromElement();
    handleFilter();
}
export default {
    handleNewButton,
    handleSubmitButton,
    eventBinder
}