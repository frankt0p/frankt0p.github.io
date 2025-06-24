---
title: "A new project about bf1 data tracker"
date: 2025-06-24
---

Over the past few days I’ve been planning a small personal project—I’ve always wanted to build a BF1 stats‐query web service.   
To take advantage of this, I’m using a Spring Boot + React architecture. Right now the functionality is still quite simple: it just calls a free, open-source Gametools API to fetch player data based on an entered username. There are already similar services—one you can deploy on Discord, and a stats-query bot running in QQ groups in China.   
During development I ran into a minor issue on the backend: when deserializing the JSON returned by the API I can use Lombok’s @Data to map it, but only by annotating each field with @JsonProperty does that data actually make it through to the front end. The @JsonInclude(JsonInclude.Include.ALWAYS) annotation, however, didn’t have the effect I expected.