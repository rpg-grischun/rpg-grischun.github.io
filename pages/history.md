---
title: History
layout: page
permalink: /adventureleague/world/history/
hero_darken: true
language: de-CH
hero_image: /assets/images/quest_board.jpg
---

Wir zeigen dir hier die Geschichte von Avalir.

{% for entry in site.world %}
{% if entry.category == 'event' %}

<div class="timeline-event">
  <p><a href="{{ entry.url }}"><h3>{{ entry.title }}</h3></a></p>
  <p>{{ entry.description }}</p>
</div>
{% endif %}
{% endfor %}
