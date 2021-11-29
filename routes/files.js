const express = require('express');
const File = require('../models/files');
const upload = require('../helpers/files');
const router = express.Router();

// PRICES DB
router.post("/common_data_management/prices_db", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/prices_db/';
    upload(file, path, res);      
})

// PART AVAILABILITY DB
router.post("/common_data_management/part_availability_db", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/part_availability_db/';
    upload(file, path, res);      
})

// EURO SHELVING
router.post("/common_data_management/product_documentation/euro_shelving/product_manual/manual", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/euro_shelving/product_manual/manual/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/euro_shelving/assembly_instructions/bay", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/euro_shelving/assembly_instructions/bay/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/euro_shelving/assembly_instructions/accessories", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/euro_shelving/assembly_instructions/accessories/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/euro_shelving/assembly_instructions/door_kit", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/euro_shelving/assembly_instructions/door_kit/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/euro_shelving/assembly_instructions/louvre_panels", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/euro_shelving/assembly_instructions/louvre_panels/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/euro_shelving/assembly_instructions/pull_outs", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/euro_shelving/assembly_instructions/pull_outs/';
    upload(file, path, res);      
})

// XL PALLET RACKING
router.post("/common_data_management/product_documentation/xl_pallet_racking/product_manual/xl_digest", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/xl_pallet_racking/product_manual/xl_digest/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/xl_pallet_racking/assembly_instructions/assembly_guide", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/xl_pallet_racking/assembly_instructions/assembly_guide/';
    upload(file, path, res);      
})

router.post("/common_data_management/product_documentation/xl_pallet_racking/assembly_instructions/installation_instructions", (req, res) => {
    File.sync();
    let file = req.files.file;
    let path = './uploads/common_data_management/product_documentation/xl_pallet_racking/assembly_instructions/installation_instructions/';
    upload(file, path, res);      
})

     
module.exports = router;