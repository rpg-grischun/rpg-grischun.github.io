---
title: Organisationen
layout: page
permalink: /adventureleague/avalir/organisationen/
hero_darken: true
language: de-CH
hero_image: /assets/images/quest_board.jpg
---
<table>
  <tr>
    <th>Name</th>
    <th>Beschreibung</th>
  </tr>
{% for entry in site.world %}
{% if entry.category == 'organization' %}
  <tr>
    <td><a href="{{ entry.permalink }}">{{ entry.title }}</a></td>
    <td>{{ entry.description }}</td>
  </tr>
{% endif %}
{% endfor %}
</table>