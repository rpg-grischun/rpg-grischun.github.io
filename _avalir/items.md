---
title: Organisationen
layout: page
permalink: /avalir/items/
hero_darken: true
language: de-CH
hero_image: /assets/images/quest_board.jpg
---
<table>
  <tr>
    <th>Name</th>
    <th>Beschreibung</th>
  </tr>
{% for entry in site.avalir %}
{% if entry.category == 'item' %}
  <tr>
    <td><a href="{{ entry.permalink }}">{{ entry.title }}</a></td>
    <td>{{ entry.description }}</td>
  </tr>
{% endif %}
{% endfor %}
</table>