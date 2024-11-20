---
title: Orte
layout: page
permalink: /avalir/locations/
hero_darken: true
language: de-CH
hero_image: /assets/images/quest_board.jpg
---

<table>
  <tr>
    <th>Name</th>
    <th>Beschreibung</th>
    <th>Ist In</th>
  </tr>
{% for entry in site.avalir %}
{% if entry.layout == 'location' %}
  <tr>
    <td><a href="{{ entry.permalink }}">{{ entry.title }}</a></td>
    <td>{{ entry.description }}</td>
    <td>{{ entry.parent }}</td>
  </tr>
{% endif %}
{% endfor %}
</table>
