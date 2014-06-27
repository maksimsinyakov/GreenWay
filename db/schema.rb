# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140611190605) do

  create_table "cars", :force => true do |t|
    t.string   "brand"
    t.string   "model"
    t.string   "reg"
    t.string   "color"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "user_id"
  end

  create_table "moves", :force => true do |t|
    t.integer  "car_id"
    t.integer  "route_id"
    t.integer  "status"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "routes", :force => true do |t|
    t.integer  "load"
    t.float    "fare"
    t.text     "info"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "name"
    t.string   "coord"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "surname"
    t.text     "info"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "card"
  end

end
