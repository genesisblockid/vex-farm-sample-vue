cmake_minimum_required(VERSION 3.5)
project(eosio_token_example VERSION 1.0.0)
find_package(eosio.cdt)


file(GLOB_RECURSE SOURCE_FILES "*.hpp" "*.cpp")

add_contract(vexbasotoken  vexbasotoken ${CMAKE_CURRENT_SOURCE_DIR}/src/vexbasotoken.cpp)

target_include_directories(vexbasotoken.wasm
        PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/include)

target_compile_options(vexbasotoken.wasm PUBLIC -R${CMAKE_CURRENT_SOURCE_DIR})










