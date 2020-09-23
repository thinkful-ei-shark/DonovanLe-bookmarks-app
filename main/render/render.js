import temp from '../components/templates';
import $ from 'jquery';
import event from '../event-handler/events';

function renderInitialScreen() {
    $('header').append(temp.initialControls());
    $('main').append(temp.minimizedBookmarks());
    event.handleNewButton();
}

function renderNewAddScreen() {
    $('body').html(temp.addNewBookmark());
    event.handleSubmitButton();
}

export default {
    renderInitialScreen,
    renderNewAddScreen
}