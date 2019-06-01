/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

names = null;

var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    document.getElementById("fun_me").addEventListener("click", this.fun_me);

    // Load names.
    var xmlhttp;
    var jsonObject;

    // code for IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest)
    {
      xmlhttp=new XMLHttpRequest();
    }
    // code for IE6, IE5
    else
    {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function()
    {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        jsonObject = JSON.parse(xmlhttp.responseText);
        names = jsonObject;
      }
    }

    xmlhttp.open("GET","names.json",true);
    xmlhttp.send();
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },

  fun_me: function() {
    //console.log('The fun_me() function has been called, Sir!');
    console.log('Names: %o', names);
    console.log('Names[0]: %o', names[0]);

    min = 0;
    max = names.length;
    console.log('Length: ' + names.length);
    index = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('Index: ' + index);
    var name = names[index];
    console.log('Name: %o', name);
    console.log('Firstname: ' + name['firstname']);
    console.log('Firstname 2: ' + name.firstname);

    firstname = document.getElementById('i_firstname');
    firstname.innerHTML = name['firstname'];
    lastname = document.getElementById('i_lastname');
    lastname.innerHTML = name['lastname'];
  }

};

app.initialize();

/* vim:set ai et ft=javascript sts=2 sw=2 ts=2: */
