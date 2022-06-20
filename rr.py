
import telebot
from telebot import types # для указание типов


# Создаем экземпляр бота
bot = telebot.TeleBot('5367494525:AAFLUKPVgJvfKh5Tv_TQzHIpkzK-1R5Wev4')
# Функция, обрабатывающая команду /start

@bot.message_handler(commands=["start"])
def start(message, res=False):
    bot.send_message(message.chat.id, '💫💫💫Привет, ты попал в наш уютный магазин Аниме фигурок) мяу 💫💫💫')
    bot.send_photo(message.chat.id, photo= 'https://figurehouse.ru/wp-content/uploads/2019/12/1-5-6-12.jpg', caption='')
    bot.send_message( message.chat.id,'Начинай покупки на кнопке ниже)' , parse_mode="Markdown", reply_markup=webAppKeyboardInline())

@bot.message_handler(content_types="web_app_data") #получаем отправленные данные 
def answer(webAppMes):
   print(webAppMes) #вся информация о сообщении
   print(webAppMes.web_app_data.data) #конкретно то что мы передали в бота
   bot.send_message(webAppMes.chat.id, f"тебе написали: {webAppMes.web_app_data.data}") 

  
def webAppKeyboardInline():
    keyboard = types.InlineKeyboardMarkup(row_width=1) #создаем клавиатуру inline
    webApp = types.WebAppInfo("https://faterer-r.github.io/shop/")
    one_butt = types.InlineKeyboardButton(text="Покупочки", web_app=webApp)
    keyboard.add(one_butt)

    return keyboard




# Запускаем бота
if __name__ == '__main__':
   bot.infinity_polling()
