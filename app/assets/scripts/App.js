import $ from 'jquery';
import fontawesome from '@fortawesome/fontawesome';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import Preloader from './modules/Preloader';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll($(".skills-item"), "85%");
new RevealOnScroll($(".works-item"), "60%");
var modal = new Modal();
var preloader = new Preloader();
