---
title: Adventure League
layout: page
permalink: /adventureleague/avalir/
callouts: avalir_callout
hero_darken: true
language: de-CH
hero_image: /assets/images/quest_board.jpg
include_scripts:
  - "/assets/js/worldmap.js"
  - "/assets/js/panzoom.min.js"
---
Wilkommen auf Avalir!

Diese Welt ist

<div id="container" >
  <div id="world_map" class="world_map_container" >
    <img src="/assets/images/avalir/avalir_world_map.jpg" />
    {% for entry in site.world %}
    {% if entry.category == 'location' And entry.coordinates %}
    <div class="world_map_link" style="top: {{ entry.coordinates[1] | divided_by: 2458.0 | times: 100.0 }}%; left: {{ entry.coordinates[0] | divided_by: 4096.0 | times: 100.0 }}%;">
    <!-- <div class="world_map_link" style="top: 10%; left: 10%;"> -->
      <p>
        <a href="{{ entry.url }}"><h3>{{ entry.title }}</h3></a>
      </p>
    </div>
    {% endif %}
    {% endfor %}
  </div>
</div>
