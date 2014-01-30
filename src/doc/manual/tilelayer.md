## Класс DG.TileLayer

{toc}

### Описание

Используется для загрузки и отображения тайлового слоя на карте, реализует интерфейс <a href="#">ILayer</a>.

### Пример использования

	DG.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
		key: 'API-key',
		styleId: 997
	}).addTo(map);

### Конструктор
<table>
	<thead>
		<tr>
			<th>Конструктор</th>
			<th>Использование</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>x
		<tr>
			<td><code><b>DG.TileLayer</b>(
				<nobr>&lt;String&gt; <i><a href="#url-шаблон">urlTemplate</a></i>,</nobr>
				<nobr>&lt;<a href="#опции">TileLayer options</a>&gt; <i>options?</i> )</nobr>
			</code></td>

			<td>
				<code>DG.tileLayer(&hellip;)</code>
			</td>

			<td>Создает объект тайлового слоя по переданному <a href="#url-шаблон">URL шаблону</a> и необязательному объекту опций.</td>
		</tr>
	</tbody>
</table>

### URL шаблон

Строка следующего вида:

	'http://{s}.somedomain.com/blabla/{z}/{x}/{y}.png'

`{s}` &mdash; один из доступных поддоменов (используется для параллельной загрузки тайлов браузером). Поддомены указываются в опциях. `a`, `b` или `c` &mdash; значения по умолчанию, `{z}` &mdash; уровень зума, `{x}` и `{y}` &mdash; координаты тайлов в тайловой сетке.

В шаблонах можно использовать собственные ключи, например так:

	DG.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});

### Опции
<table>
	<thead>
		<tr>
			<th>Опция</th>
			<th>Тип</th>
			<th>По умолчанию</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code><b>minZoom</b></code></td>
			<td><code>Number</code></td>
			<td><code>0</code></td>
			<td>Минимальный уровень зума.</td>
		</tr>
		<tr>
			<td><code><b>maxZoom</b></code></td>
			<td><code>Number</code></td>
			<td><code>18</code></td>
			<td>Максимальный уровень зума.</td>
		</tr>
		<tr>
			<td><code><b>maxNativeZoom</b></code></td>
			<td><code>Number</code></td>
			<td><code><span>null</span></code></td>
			<td>Максимальный уровень зума исходных тайлов. Если значение установлено, на всех уровнях зума больших <code>maxNativeZoom</code> будут отображены смасштабированные тайлы максимально доступного зума.</td>
		</tr>
		<tr>
			<td><code><b>tileSize</b></code></td>
			<td><code>Number</code></td>
			<td><code>256</code></td>
			<td>Размер тайла (ширина и высота в пикселях, предполагается что тайл квадратный).</td>
		</tr>
		<tr>
			<td><code><b>subdomains</b></code></td>
			<td><code>String</code> или <code>String[]</code></td>
			<td><code>'abc'</code></td>
			<td>Поддомены тайлового сервиса. Могут передаваться одной строкой (где каждая буква &mdash; имя поддомена) или массивом строк.</td>
		</tr>
		<tr>
			<td><code><b>errorTileUrl</b></code></td>
			<td><code>String</code></td>
			<td><code>''</code></td>
			<td>URL тайла, который будет показан в случае ошибки загрузки.</td>
		</tr>
		<tr>
			<td><code><b>attribution</b></code></td>
			<td><code>String</code></td>
			<td><code>''</code></td>
			<td>Копирайты слоя.</td>
		</tr>
		<tr>
			<td><code><b>tms</b></code></td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
			<td>Если <code>true</code>, тогда для тайлов выполняется инверсия нумерации по оси Y (актуально для TMS сервисов).</td>
		</tr>
		<tr>
			<td><code><b>continuousWorld</b></code></td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
			<td>Если установлено значение <code>true</code>, тогда координаты тайлов не будут "заворачиваться" по ширине (от -180&deg; до 180&deg; долготы) или высоте (от -90&deg; до 90&deg; широты). Удобно, если вы используете API для собственных карт, не отражающих реальный мир (например, игры, карты помещений, фото).</td>
		</tr>
		<tr>
			<td><code><b>noWrap</b></code></td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
			<td>Если установлено значение <code>true</code>, тогда тайлы не будут загружаться за пределами указанной ширины мира (от -180&deg; до 180&deg; долготы).</td>
		</tr>
		<tr>
			<td><code><b>zoomOffset</b></code></td>
			<td><code>Number</code></td>
			<td><code>0</code></td>
			<td>Значение, на которое будет смещен уровень масштабирования в адресе тайла.</td>
		</tr>
		<tr>
			<td><code><b>zoomReverse</b></code></td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
			<td>Если установлено значение <code>true</code>, тогда уровень масштабирования в адресе тайла будет обратным (<code>maxZoom - zoom</code> вместо <code>zoom</code>).</td>
		</tr>
		<tr>
			<td><code><b>opacity</b></code></td>
			<td><code>Number</code></td>
			<td><code>1.0</code></td>
			<td>Прозрачность тайлового слоя.</td>
		</tr>
		<tr>
			<td><code><b>zIndex</b></code></td>
			<td><code>Number</code></td>
			<td><code>null</code></td>
			<td>Указывает z-index тайлового слоя. По умолчанию не установлен.</td>
		</tr>
		<tr>
			<td><code><b>unloadInvisibleTiles</b></code></td>
			<td><code>Boolean</code></td>
			<td>depends</td>
			<td>Если установлено значение <code>true</code>, тогда все тайлы которые выходят за область видимости удаляются после перемещения карты (для лучшей производительности). По умолчанию <code>true</code> для мобильного WebKit, в остальных случаях <code>false</code>.</td>
		</tr>
		<tr>
			<td><code><b>updateWhenIdle</b></code></td>
			<td><code>Boolean</code></td>
			<td>depends</td>
			<td>Если установлено значение <code>false</code>, тогда новые тайлы подгружаются во время перетаскивания карты, иначе только по завершению перетаскивания (для лучшей производительности). По умолчанию <code>true</code> для мобильного WebKit, в остальных случаях <code>false</code>.</td>
		</tr>
		<tr>
			<td><code><b>detectRetina</b></code></td>
			<td><code><code>Boolean</code></code></td>
			<td><code>false</code></td>
			<td>Если установлено значение <code>true</code> и у пользователя устройство с Retina экраном, тогда вместо одного тайла будет загружено 4 с большим уровнем масштабирования, также изображениям устанавливается размер на 50% меньше их реального разрешения. Таким образом достигается лучшее качество отображения тайлов на экранах с высоким разрешением.</td>
		</tr>
		<tr>
			<td><code><b>reuseTiles</b></code></td>
			<td><code><code>Boolean</code></code></td>
			<td><code>false</code></td>
			<td>Если установлено значение <code>true</code>, тогда все тайлы, которые не видны после изменения центра карты, добавляются в очередь переиспользования, из которой они будут взяты, если опять попадут в область видимости.</td>
		</tr>
	</tbody>
</table>

### События

Вы можете подписаться на следующие события используя <a href="#методы">Методы</a>.
<table>
	<thead>
		<tr>
			<th>Событие</th>
			<th>Данные</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code><b>loading</b></code></td>
			<td><code><a href="#event">Event</a></code>
			<td>Вызывается при начале загрузки тайлов.</td>
		</tr>
		<tr>
			<td><code><b>load</b></code></td>
			<td><code><a href="#event">Event</a></code>
			<td>Вызывается при окончании загрузки видимых тайлов.</td>
		</tr>
		<tr>
	      <td><code><b>tileloadstart</b></code></td>
	      <td><code><a href="#tile-event">TileEvent</a></code></td>
	      <td>Вызывается при запросе тайла и начале его загрузки.</td>
	    </tr>
		<tr>
			<td><code><b>tileload</b></code></td>
			<td><code><a href="#tile-event">Event</a></code>
			<td>Вызывается после загрузки тайла.</td>
		</tr>
		<tr>
			<td><code><b>tileunload</b></code></td>
			<td><code><a href="#tile-event">Event</a></code>
			<td>Вызывается при удалении тайла (например, при включенном режиме <code>unloadInvisibleTiles</code>).</td>
		</tr>
	</tbody>
</table>

### Методы
<table>
	<thead>
		<tr>
			<th>Метод</th>
			<th>Возвращает</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code><b>addTo</b>(
				<nobr>&lt;<a href="#map">Map</a>&gt; <i>map</i> )</nobr>
			</code></td>

			<td><code>this</code></td>
			<td>Добавляет слой на карту.</td>
		</tr>
		<tr>
			<td><code><b>bringToFront</b>()</code></td>
			<td><code>this</code></td>
			<td>Позиционирует тайловый слой поверх других слоев.</td>
		</tr>
		<tr>
			<td><code><b>bringToBack</b>()</code></td>
			<td><code>this</code></td>
			<td>Позиционирует тайловый слой под другими слоями.</td>
		</tr>
		<tr>
			<td><code><b>setOpacity</b>(
				<nobr>&lt;Number&gt; <i>opacity</i> )</nobr>
			</code></td>

			<td><code>this</code></td>
			<td>Изменяет прозрачность тайлового слоя.</td>
		</tr>
		<tr>
			<td><code><b>setZIndex</b>(
				<nobr>&lt;Number&gt; <i>zIndex</i> )</nobr>
			</code></td>

			<td><code>this</code></td>
			<td>Устанавливает z-index тайлового слоя.</td>
		</tr>
		<tr>
			<td><code><b>redraw</b>()</code></td>
			<td><code>this</code></td>
			<td>Очищает все текущие тайлы и запрашивает новые.</td>
		</tr>
		<tr>
			<td><code><b>setUrl</b>(
				<nobr>&lt;String&gt; <i><a href="#url-шаблон">urlTemplate</a></i> )</nobr>
			</code></td>
			<td><code>this</code></td>
			<td>Обновляет URL шаблон слоя и перерисовывает его.</td>
		</tr>
		<tr>
			<td><code><b>getContainer</b>()</nobr>
			</code></td>
			<td><code>HTMLElement</code></td>
			<td>Возвращает HTML элемент, который содержит тайлы данного слоя.</td>
		</tr>
	</tbody>
</table>