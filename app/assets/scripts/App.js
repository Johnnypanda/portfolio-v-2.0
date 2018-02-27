import fontawesome from '@fortawesome/fontawesome';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".skills-item"), "85%");
new RevealOnScroll($(".works-item"), "60%");