"use strict";
import $ from 'jquery';
import api from './services/api';
import store from './manipulate-store/store';
import render from './render/render';
import event from '../event-handler/events';
import './style.css';

function main() {
    render.renderInitialScreen();
    // api.getBookmarks()
    //     .then((bookmarks) => {
    //         bookmarks.array.forEach(element => {
    //             store.addBookmark(element);

    //         });
    //     })

    console.log(store.store.bookmarks[0].title);
}

$(main);