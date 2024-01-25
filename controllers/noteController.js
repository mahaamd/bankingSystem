const mongoose = require('mongoose');
const Note = require("../models/note");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.render('note_index');
});

exports.notes_list = asyncHandler(async (req, res, next) => {
    //res.send("NOT IMPLEMENTED: notes list");
    const notes = await Note.find({}, "title date _id")
        .sort({ date: -1 })
        .exec();
    res.render("note_list", { notes });
});


exports.note_detail = asyncHandler(async (req, res, next) => {
    //res.send(`NOT IMPLEMENTED: note detail: ${req.params.id}`);
    const note = await Note.find({ "_id": req.params.id }, "title date text ")
        .exec();
    //console.log(note);
    res.render('note_view', { "note":note[0] })
});

exports.note_create_post = asyncHandler(async (req, res, next) => {
    new Note({ "title": req.body.title, "text": req.body.text }).save();
    res.redirect('/note');
});

exports.note_create_get = asyncHandler(async (req, res, next) => {
    res.render('note_create');
});