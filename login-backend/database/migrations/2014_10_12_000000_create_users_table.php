<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// Define an anonymous class that extends the Migration class
return new class extends Migration
{
    // The 'up' method is called when the migration is run
    public function up()
{
    // Use the Schema facade to create a new 'users' table with the given columns
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('email')->unique();
        $table->string('password');
        $table->timestamps();
    });
}
};
