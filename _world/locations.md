---
title: Orte
layout: page
permalink: /adventureleague/avalir/locations/
hero_darken: true
language: de-CH
hero_image: /assets/images/quest_board.jpg
---

| Name | Beschreibung | Ist In |
| :--- | :----------- | :----- |
{% for entry in site.world %}
{% if entry.category == 'location' %}
| {{ entry.title }} | {{ entry.description }} | {{ entry.parent }} |
{% endif %}
{% endfor %}