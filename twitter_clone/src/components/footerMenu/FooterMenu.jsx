import "./index.css";

const FooterMenu = () => {
    return (
        <div className="FooterMenu">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAt0lEQVR4nO1TWwrDMAzTJWKWI27HXT96HI9BAiXEWWp76WAWGEqoJfkFBGygEpcgAXgC2AHkq8S5xFITBGArwlvzTSsr3wHcOm95pXiFZKKO6KviIxMuBujEnNt/zQbSROWjHJMBMmz4MZc115EUlX/iyCvF1SbI2jqBk2dGmbyWp4Mjp9iJh+f5CAYq91uri3vTshGZFKMcKhrTjr0NTIMVZGGAYwSIJYT/GfKJe9fk/K6BwP/gBTVhynwIgmqrAAAAAElFTkSuQmCC" alt = ""home/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg=="  alt="search"/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFYUlEQVR4nO3cSawURRgA4J8omrhFxUiIy0WjUTygwkET9wUwLK+r6ANbwP7/aQR8r/+/H+CGefEiJw2JgkGNwWiIJnhBxSUQ8agJoEExJHhySwQVAygqgqmeGhyRhPfgzUxN9/8lnUymp7uqprp6qqrrHwCllFJKKaWUUkoppZRSSimllFJKKaWU6pwo6bvBIL9tUPa7zZJssMRjtU46VBmWZG9EwtFD/ZcWGwkb5D1aKW1iiccaynODss6ifG9Q/rQkR5u34r36vnUWWeIH+69vV/4qYfbs3gsMyVKL/NXxX/4Qtp024SXuXJ0uT9eK44GzLMkjBvnnf79Y/s6QvGRR5tgkv3HWwkcvOv44957bV3wG+WV3zLHWQ/yTQV6WpunIzpSqS0Up3/TfFsEfGsomxnF8xlDP5Y6JUCYZ4k1NFfNlTNm41uS+ZGySJRblkK+IHSbJbh+uc5tE7nKV4Svld0vZzOE6dykZkuX+Kj5iUVa629ZwpzGpt/dsS/xcvVLk8AxkGu40SsH1iKz/klwraXl6JLUiLVf5xItbnV5XsZRPMch/1zeZ1bZ03Q8/yRFXMe53pl3pBi1KeYzr/dTHELys3ekblMd82numYt9oqDpD8pb/3XgHAEZ0IAsjDMpG34l4A6rMEt/mR9f7I+q9vFP5iNO+Kw3xAXf7ipPsFqgqQ/KB74IOdDovlvgp30rehSqKk+za4gcVZf+JRtztFqNc7GeMj8QoV0PVNK5IQ/wKBMIgv+q73suhagzxtnrhs4kQCFvLJvuL5BOo4AzuYUP8x5w5/edCIOJFi86rT9/zX+41VIXryfje1XYIjCH53OUtqvVNgKrwI+Qg+/0G5c163io08WhR+nwLeR4CY5BX+YulOvNbBvMn/Oh8BQTGkqzwFfI4VIUlXl3cp4l7IdjWy6ugKtzSnaLQSdYDgYlIIt96N0BVWOLPXKFj6r8ZAmMTHh9qD7BlGtPtbi0VBGYq9o32LWQvVMGUND2nKDDKoQ5Nt5/MiMYzfZdXqMik4lGLvBsCZUm+dnnsofwaKDub5Pf4XswWCJRB3uJ7gXdD2RnK5/sJvNcgUAbldd+K50HZWeQn/cDraQiU9YPDSkzDG+QX67esfCEEKqrJIt/TWgNlZ4nfqxc2nwKBMshT/VhkI5SdQfmiPigMd21tTNm4xlJWKDuDvK/oUs5dPAoC1TN38Sh/y/oFymxasvR8Pyg8CIGzKAddXl2eoaxcNJPvTu6CwFnkXUVLxuw6KCu3oMGPQTZB4CzK5uLiSfh+KCM3s2uR1/v+/VoInCFZ61vz+hBnpU93sm5lfdn/KccIHj3VzS3pcVFUhviH5tfN+0+UaYPS33SeIl4l0MnQoXHBlscilpCfsZiZVgTiDDeXx6iWTzMkzzZmf13wKXQzF61kSH4trrJaNhm6lEF5wE+I7nNlgm5la/mtvpu7FbqcQdleDGi7eXW8m772Tf0j6HKW5OP6xZXdCd3KPaL1oWq/dTL+43RNn59f4crgyhLiY+chcc89Gv+mEGF+X0hreU/G5dXluREzH/IznEGbmeaXNFa6d/WGstWVBcrArSQv/iaDeJsPHev8F0yDGsMcKPKMvKxSq+EHYwbKglMJ7vEj7lprclVh8QK5zJD8OH1eduFgj3Ghcu4YF3rd2txVlCVebVBeGPznZU2IK+zL9jxlpwv2H9wKe96h9/4Wi1IeY1E+LYL9Ex7/v/21vgkW5X03aaj/zNAmaZqOLMIGkHdblG+KZxcomw3yt+49g/LwHQMDZ7YrP6pJT7rkKlPje93mXjfvU0oppZRSSimllFJKKaWUUkoppZRSCirhH3qY7fwO3EzyAAAAAElFTkSuQmCC" alt="bell" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO1YW4hNYRT+XUKU5BYevJgYzYMkIbeS5GGMs9c/W5hhmrPW2U1NZ/ZaewZPOh4lJUriwYuSN+RF8uJOUV4pauSSkYgYxNB/zt5zNnNmnDOXc2t/9Xfq7H3W/3/r8q31H6UiRIgQIUIpoEl+V8NSVUdEVSh01RKxUWpUhcFGqRlABIjfa+L1qkKgHXeVRn6bu9hRvjUmZKcqc1gkFiB/zVnsgHIq88m/LBJWZQogzzNnDJ95QLFDgt3+l4iPp1Kp8apMYNv2BI1ywj9vn0Y5NKRqQUJ0KGwX6x1nakkZKKXMGTTy5SD9AWV3XvJrkawGkh4/Mg+sts65JWGglIrtaZ+lSW4HggRxd0NBfSTmdC3SyE/858/suLukJPKK8tSv3efgeLXDaojGG4B8qxTybMfdNYD87n9ZkXdn35pMTtbEF4opzxZxIxD35lOnhY4o44xK/KsYYwEoUDmHNWulNyH56efsmY2p1MTRlFdAPtnvLJIDYzo0QtyNaZQvfkO6NBry3NzcOQ2Qr/hR6NXEO4oy/YbnHEC5PxJ5thyer1EeZWqQ3xrbRR3jddxbHqTZcOVZE9cBSncmEvLT2CzcxkgiQlwX6jF9gzWroWARb9IkH8I2dNom1xWFiJXwGgD5Y+Z3/DiG7lJAOe+T+a5Rmv9no5Fkb/pdX15j5C02Kaozqfp5TGskM7TxkVAEzgWFbiRSEx/NyjMfzCWb5jsgToUicCx4r6UlNQWIz4ZsHDF7jiqRXY43G4iv+x77YREncxvl9lDd3NDk1dutyTlmAfI2QLkZ1MMQNtqCaJk9zd6jQsSmzhXZguQ3tuOtG9JwnLdolNd/Xdj+WvwKErw5j/Hkpe+4bnOGERFpRGkNRgVAvtMQ37dA5YHtLe4MQN6fznvTc9KL7+k4dzU1JafnY8Nu6ZqXjSD3mrMUTMR0bEA+HPLkadtOTVJFxsY8zjEoEeN1ILkbeAJIUJUYmtxd/dME8UPb6ViYfZbrqou8Npvf/MJKdKxUZQKrVZaZxuuLRY/pQzmJGBUxiuSTuGbuIqrMYKPM1ChXw+o5gEig3yYn89HvEmKcmYyDUT8HEf5kLjSqQqDJqw+NOKH/tXLch8sd4Hi1I55+ywW6aonoCl+qaohEiBAhQgRVAvwBcfDYoPNEPXMAAAAASUVORK5CYII=" alt="message" />
        </div>
    );
};


export default FooterMenu;